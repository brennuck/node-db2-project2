exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "1293417023984712938adfjasdf",
          make: "honda",
          model: "civic",
          mileage: 90000,
          transmission: "automatic",
          title: true,
        },
        {
          vin: "129384712938adfjasdf",
          make: "toyota",
          model: "tacoma",
          mileage: 0,
          transmission: "automatic",
          title: true,
        },
        {
          vin: "1293417023984712938adfjasadfafdssdf",
          make: "ford",
          model: "trash",
          mileage: 900030,
          transmission: "manual",
          title: false,
        },
      ]);
    });
};
