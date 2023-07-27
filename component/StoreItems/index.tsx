import { FC } from "react";

export const StoreItems: FC = () => {
  return (
    <>
      <div className="flex flex-col bg-white justify-center items-center h-full p-8">
        <section className="py-20 pt-20">
          <div>
            <div>
              <h1 className="text-center cursor-pointer py-1.5 text-teal-800 text-4xl font-semibold">
                Popadelics Crunchy Mushroom Chips ($30 for three bags)
              </h1>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto mt-10 ml-24 py-16 pt-20 pt-20 pb-0">
              <div className="bg-teal-100 rounded-l-lg rounded-l-lg border-solid border-2 border-teal-500 ... hover:bg-teal-200 shadow-2xl text-xl font-serif">
                <p className="px-20 py-20">
                  These vegan, vacuumed-fried shiitake mushroom caps
                  are surprisingly filling and have a satisfying
                  crunch. Popadelics come in three flavors—“trippin’
                  truffle parm,” “twisted thai chili,” and “rad
                  rosemary + salt”—that complement the subtle mushroom
                  essence. Each packet of mushrooms contains eight
                  grams of protein and 16 grams of fiber. As a bonus,
                  a portion of the company’s profits supports health
                  and wellness organizations.
                </p>
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 max-h-88 bg-teal-500"></div>{" "}
              {/*This empty div represents the green vertical line on the Welcome page*/}
              <div>
                <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/10/popadelics-rosemary-chips_h.jpg?width=730" />
                <div className="ml-52">
                  <h4>(Photo: Courtesy Popadelics)</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto">
              <button className="hover:bg-teal-100 bg-teal-500 text-white hover:text-red-500 font-bold py-2 px-4 ml-80 rounded-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif w-40  mt-10">
                Buy Now
              </button>
              <img
                src="https://t4.ftcdn.net/jpg/04/10/76/97/360_F_410769706_H2DcdErFnM4xG6y44TpKzNjwiep5PlTX.jpg"
                className="w-60 mt-10 ml-52 px-10"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col bg-white justify-center items-center h-full p-8">
        <section className="py-20 pt-20">
          <div>
            <div>
              <h1 className="text-center cursor-pointer py-1.5 text-teal-800 text-4xl font-semibold">
                Confetti Snacks Mushroom Chips ($6 per pack){" "}
              </h1>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto mt-10 ml-24 py-16 pt-20 pt-20 pb-0">
              <div className="bg-teal-100 rounded-l-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif">
                <p className="px-20 py-20">
                  Confetti Snacks bakes whole shiitake mushrooms at
                  low heat to retain their essential nutrients,
                  including calcium, magnesium, zinc, and iron. In an
                  effort to reduce food waste, the Singapore-based
                  company sources “imperfect” produce to create their
                  mushroom and veggie chips. Flavors include Green
                  Curry and Black Truffle, and there are plans to
                  launch Tandoori BBQ and Sea Salt in the future.
                </p>
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 max-h-88 bg-teal-500"></div>{" "}
              {/*This empty div represents the green vertical line on the Welcome page*/}
              <div>
                <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/10/confetti-mushroom-chips_h.jpg?width=730" />
                <div className="ml-52">
                  <h4>(Photo: Courtesy Confetti Snacks)</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto">
              <button className="hover:bg-teal-100 bg-teal-500 text-white hover:text-red-500 font-bold py-2 px-4 ml-80 rounded-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif w-40  mt-10">
                Buy Now
              </button>
              <img
                src="https://t4.ftcdn.net/jpg/04/10/76/97/360_F_410769706_H2DcdErFnM4xG6y44TpKzNjwiep5PlTX.jpg"
                className="w-60 mt-10 ml-52 px-10"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col bg-white justify-center items-center h-full p-8">
        <section className="py-20 pt-20">
          <div>
            <div>
              <h1 className="text-center cursor-pointer py-1.5 text-teal-800 text-4xl font-semibold">
                Somos Smoky Chipotle Mushrooms ($11 for two pouches){" "}
              </h1>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto mt-10 ml-24 py-16 pt-20 pt-20 pb-0">
              <div className="bg-teal-100 rounded-l-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif">
                <p className="px-20 py-20">
                  Elevate your camping meals by packing a couple of
                  pouches of Somos’ Smoky Chipotle Mushrooms. This
                  white button mushroom dish is simmered with roasted
                  tomatoes, onion, garlic, and traditional chipotle
                  adobo sauce. Heat up the mushrooms in a cast-iron
                  pan over a campfire and serve with rice—or stuff
                  them in burritos for a hearty meal.
                </p>
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 max-h-88 bg-teal-500"></div>{" "}
              {/*This empty div represents the green vertical line on the Welcome page*/}
              <div>
                <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/10/somos-smoky-chipotle_h.jpg?width=730" />
                <div className="ml-52">
                  <h4>(Photo: Courtesy Somos)</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto ">
              <button className="hover:bg-teal-100 bg-teal-500 text-white hover:text-red-500 font-bold py-2 px-4 ml-80 rounded-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif w-40  mt-10">
                Buy Now
              </button>
              <img
                src="https://t4.ftcdn.net/jpg/04/10/76/97/360_F_410769706_H2DcdErFnM4xG6y44TpKzNjwiep5PlTX.jpg"
                className="w-60 mt-10 ml-52 px-10"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col bg-white justify-center items-center h-full p-8">
        <section className="py-20 pt-20">
          <div>
            <div>
              <h1 className="text-center cursor-pointer py-1.5 text-teal-800 text-4xl font-semibold">
                Laird Superfood Hot Chocolate with Functional Mushroom
                ($25 per bag){" "}
              </h1>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto mt-10 ml-24 py-16 pt-20 pt-20 pb-0">
              <div className="bg-teal-100 rounded-l-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif">
                <p className="px-20 py-20">
                  Co-founded by Laird Hamilton and Gabby Reece, Laird
                  Superfood recently launched a line of
                  mushroom-centric coffee, creamer, and blends. Their
                  hot chocolate combines organic maitake, chaga, and
                  reishi mushroom extracts with organic Peruvian cacao
                  powder and coconut milk powder. Studies have found
                  that adaptogens found in these mushrooms may help
                  your body fight stress, anxiety, and fatigue. Stir
                  three and a half tablespoons of hot chocolate powder
                  with eight ounces of hot water or milk for a
                  soothing beverage.
                </p>
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 max-h-88 bg-teal-500"></div>{" "}
              {/*This empty div represents the green vertical line on the Welcome page*/}
              <div>
                <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/10/laird-hot-chocolate-mushrooms_h.jpg?width=730" />
                <div className="ml-52">
                  <h4>(Photo: Courtesy Laird Superfood)</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col auto mt-10-cols-auto">
              <button className="hover:bg-teal-100 bg-teal-500 text-white hover:text-red-500 font-bold py-2 px-4 ml-80 rounded-lg rounded-l-lg border-solid border-2 border-teal-500 ... shadow-2xl hover:bg-teal-200 text-xl font-serif w-40  mt-10">
                Buy Now
              </button>
              <img
                src="https://t4.ftcdn.net/jpg/04/10/76/97/360_F_410769706_H2DcdErFnM4xG6y44TpKzNjwiep5PlTX.jpg"
                className="w-60 mt-10 ml-52 px-10"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
