const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/plants", function (req, res) {
  res.json({
    data: [
      {
        description:
          "As the name suggests, our Boyscout derives from the now famous American Girl Scout Cookies, but a particular variant called More Cowbell. No imitation then, just pure news!One of the cannabis strains most recommended by the Annibale Seedshop team for those looking for a special bittersweet weed taste, with abundant and exquisite yields of buds that bring a strong High effect, mixed with a strong Indica hit!Additional information about Boyscout Cookies F1 Regular by Annibale Genetics60% Sativa / 40% IndicaGeneticsMore Cowbell GSC x Mountain TempleTaste of Boyscout Cookies F1The taste of Annibale Genetics’ regular Bouscout Cookies F1 cannabis strain is simply amazing. With a complex terpene and aromatic spectrum, it is really difficult to describe the taste of this strain.In fact, we can find delicate touches of lemon and exotic wood, up to intense notes of balsamic vinegar and spices, to reach peaks of incense typical of pure Haze, with hints of citric acidity as an aftertaste like a Vinaigrette, and finish with sugar funds. , coffee and earth. Bittersweet is definitely the best adjective!Highly recommended by the Annibale Seedshop team as a gourmet cannabis strain!Effect of Boyscout Cookies F1 RegularThe effect of Boyscout Cookies F1 is predominantly Sativa, starting with a strong cerebral high from the very first hits. Its tonic effect is soon replaced by a truly satisfying muscle relaxation. Additionally, munchies are a very common reaction when smoking a joint of this herb. If you smoke more than you need to, it might knock out. its consumers.Ideal as a natural stimulus and relief to appetite and sleep!CultivationDespite being a predominantly sativa hybrid Cannabis plant, its cultivation is not complex, but it is instead recommended even for the most inexperienced .. In fact, it will be enough to give an intense light to the regular Boyscout Cookies F1 by Annibale Genetics to see it develop branches with very close internodes. , small detail Indica that carries behind. It develops medium heights, which makes it ideal for indoor growing in Sea of ​​Green and Screen Of Green.Our Boyscout has a strong resistance to pests and molds, a perfect detail for its use in Outdoor and Guerrilla crops.Indoors, her flowering time is around 9-12 weeks, depending on the phenotypeIn Outdoor, regular Boyscout Cookies may be ready between the first and second half of October.Cannabis variety suitable for indoor, outdoor, high altitude, guerrilla and greenhouse cultivation ",
        id: "644633e1a2a2f46c02511bb1",
        name: "Boyscout Cookies",
        type: "indica/sativa",
      },
      {
        description:
          "Flower time around 9 weeks indoor. For this fine specimen we took our neighborhood O.G. That we call Gabecut O.G. which goes by so many other O.G. names. Some of the names are Master OG, Diamond OG, Pure Kush, Lemon O.G., Royal OG and the list goes on.Overall it’s the Original. We crossed it with our firey potent Lou dawg Male resulting in an OG that represents the finest of Long Beach’s intensity, style and flavor. We named this after our cousin who happens to have the same name as the lead singer of Sublime…Hope you enjoy Brad Lee’s O.G. ",
        id: "644633e1a2a2f46c02511bb2",
        name: "Brad Lee O.G.",
        type: "mostly indica",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
