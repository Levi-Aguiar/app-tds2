const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 24.9,
        description:
          "Um hamburger tão bonito que me deu fome enquanto eu fazia esse layout para o projeto...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 34.9,
        description:
          "Os ingredientes desse hambúrguer mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 32.7,
        description:
          "Aquele hambúrguer que não podemos tirar do cardápio devido aos clientes mais antigos da hamburgueria...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 29.9,
        description:
          "Aquele que você não gosta de primeira, mas depois fica viciado e não consegue mais largar...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
  {
    title: "Combos Especiais",
    data: [
      {
        id: "8",
        title: "Combo Família",
        price: 109.9,
        description:
          "Aquele combo perfeito para reunir todo mundo à mesa, compartilhar momentos especiais e saborear uma refeição completa em família...",
        cover: require("../../assets/products/cover/8.png"),
        thumbnail: require("../../assets/products/thumbnail/8.png"),
        ingredients: [
          "2x X-Burgers;",
          "1x Batata Grande;",
          "2x Refrigerante;",
        ],
      },
      
      { 
        id: "9",
          title: "Combo Casal",
          price: 89.9,
          description:
            "Uma combinação criada para transformar qualquer encontro em um momento inesquecível, com sabores que harmonizam tão bem quanto vocês...",
          cover: require("../../assets/products/cover/9.png"),
          thumbnail: require("../../assets/products/thumbnail/9.png"),
          ingredients: [
            "2x Lanches Artesanais;",
            "2x Sobremesa;",
          ],
        },
        {
          id: "10",
          title: "Combo Kids",
          price: 29.9,
          description:
            "Uma opção pensada para encantar os pequenos, unindo sabor, diversão e uma surpresa especial em cada refeição...",
          cover: require("../../assets/products/cover/10.png"),
          thumbnail: require("../../assets/products/thumbnail/10.png"),
          ingredients: [
            "1x Mini Hambúrguer;",
            "1x Suco;",
            "1x Brinquedo Surpresa;",
          ],
        },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { CATEGORIES, MENU, ProductProps, PRODUCTS }

