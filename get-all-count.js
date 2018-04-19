var ignoreDB = ["config", "admin", "local"]

db.getMongo().getDBNames().forEach(function(dbName){
  	if (!(isInArray(dbName, ignoreDB))) {
		db2 = db.getSiblingDB(dbName);
		db2.getCollectionNames().forEach(function(collectionName){
			var doc2 = db2[collectionName].count();
			printjson(doc2);
			});
	}
});
