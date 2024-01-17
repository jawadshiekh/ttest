const { v4: uuidv4 } = require("uuid");

const objectIntoThunderClientApiCollection = (entityObject) => {
  const basicInfo = {
    client: "Thunder Client",
    collectionName: "Lorem Ipsum",
    dateExported: "2023-12-08T20:40:47.544Z",
    version: "1.1",
  };

  const folders = [];

  const requests = [];

  for (key in entityObject) {
    const id = uuidv4();

    // creating parent directory
    folders.push({
      _id: id,
      name: key,
      containerId: "",
      created: "2023-12-08T20:40:47.544Z",
      sortNum: 99999,
    });

    // running for each child from the group
    entityObject[key].forEach((groupName) => {
      // inserting children in parent directory
      const _id = uuidv4();

      folders.push({
        _id: _id,
        name: groupName,
        containerId: id,
        created: "2023-12-08T20:40:47.544Z",
        sortNum: 99999,
      });

      [
        ["Get All", "GET"],
        ["Get Single", "GET"],
        ["Create", "POST"],
        ["Update", "PATCH"],
        ["Delete", "DELETE"],
      ].forEach(([name, type]) => {
        requests.push({
          _id: uuidv4(),
          colId: _id,
          containerId: _id,
          name: `${name} ${groupName}`,
          url: `http://localhost:4400/api/${key}/${groupName}`,
          method: type,
          sortNum: 0,
          created: "2023-12-08T20:40:47.544Z",
          modified: "2023-12-08T20:40:47.544Z",
          headers: [],
          params: [],
          tests: [],
        });
      });
    });
  }

  return {
    ...basicInfo,
    folders,
    requests,
  };
};

module.exports = objectIntoThunderClientApiCollection;
