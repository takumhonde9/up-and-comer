const { parseReadJSON, stringifyWriteJSON } = require("./jsonHelper");

Object.filter = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).filter(predicate));

class Model {
  constructor(modelName) {
    this.modelName = modelName;
    this.data = parseReadJSON(modelName);
  }
  /**
   * Description. This method queries database and fetches all rows for model
   * @returns {[]} returns an array of rows for the table associated with model
   */
  fetchAll() {
    return this.data;
  }
  /**
   * Description. This method queries database and fetches the row with given id
   * @param {number} id the id for the row to be fetched
   * @returns {any} returns an object with appropriate fields
   */
  fetchById(id) {
    if (this.idNotFound(id)) {
      throw Error(`Could not find data for row with id: ${id}`);
    }
    const data = this.data[this.modelName];
    return data.find((datum) => parseInt(datum.id) === parseInt(id));
  }
  /**
   * Description. This method queries database and fetches the row with given id
   * @param {number} id the id for the row to be updated
   * @param {any} options the options that are to be updated
   * @returns {any} returns an updated object with appropriate fields if successful operation
   */
  update(id, options) {
    if (this.idNotFound(id)) {
      throw Error(`Could not find data for row with id: ${id}`);
    }
    const verif = this.verifyKeys(options);
    if (verif.isExistingKeys) {
      const oldData = this.data[this.modelName];
      const oldRow = oldData.find(
        (datum) => parseInt(datum.id) === parseInt(id)
      );
      const verifiedOptions = Object.filter(options, ([key, value]) =>
        this.invalidFields(key)
      );
      const indexOfReplacement = oldData.findIndex(
        (datum) => parseInt(datum.id) === parseInt(id)
      );

      const newRow = { ...oldRow, ...verifiedOptions };

      const newData = oldData;

      newData[indexOfReplacement] = newRow;

      stringifyWriteJSON(this.modelName, { [this.modelName]: newData });

      return newRow;
    } else {
      console.error("Keys do not exist:", verif.invalidKeys);
      throw Error(`invalid fields: ${verif.invalidKeys}`);
    }
  }
  /**
   * Description. This method "verifies" whether keys entered were valid fields in the database table
   * @param {any} options
   * @returns {isExistingKeys: boolean, invalidKeys: [string]} retuns an object that shows whether the options passed are correct
   */
  verifyKeys(options) {
    const validKeys = Object.keys(this.data[this.modelName][0]);
    const keysFound = Object.keys(options);
    let report = {
      isExistingKeys: true,
      invalidKeys: "",
    };
    keysFound.forEach((key, index) => {
      if (!validKeys.includes(key)) {
        report.isExistingKeys = false;
        report.invalidKeys =
          index < keysFound.length - 1
            ? report.invalidKeys + key + ", "
            : report.invalidKeys + key + ".";
      }
    });
    return report;
  }

  /**
   * Description. This method checks whether a row with id exists
   * @param {number} id this is the id to be verified
   * @returns {boolean} returns true if the id is found, otherwise, false
   */
  idNotFound(id) {
    return !this.data[this.modelName]
      .map((datum) => datum.id)
      .includes(parseInt(id));
  }

  /**
   * Description. This method checks whether a row with key should not be updated
   * @param {number} key this is the key to be verified
   * @returns {boolean}
   */
  invalidFields(key) {
    return (
      key !== "id" &&
      key !== "artist_id" &&
      key !== "album_id" &&
      key !== "track_id"
    );
  }
}

exports.Model = Model;
