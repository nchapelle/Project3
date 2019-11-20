module.exports = function(sequelize, DataTypes) {
    var League = sequelize.define("League", {
      // Giving the Author model a name of type STRING
      league_name: DataTypes.STRING,
      league_descr: DataTypes.STRING,
      league_season: DataTypes.INTEGER
    });
  
    League.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      League.hasMany(models.Team, {
        onDelete: "cascade"
      });
    };
  
    return League;
  };
  