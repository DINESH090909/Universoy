import { useEffect, useState } from "react";

import Carte from "../Carte";
import MenuType from "../Menu/MenuType";
import Card from "../Carte/card";


import "./Commander.css";

import { sendrequest } from "../middlewares/request";

import { IconButton } from "@material-ui/core";

const Commander = () => {
  const [active, setActive] = useState(1);
  const [activeCarte, setActiveCarte] = useState(true);
  const [datas, setDatas] = useState([]);
  const [sideDishes, setSideDishes] = useState([]);  
  const [boissonFamily, setBoissonFamily] = useState([]);
  const [choixPain, setChoixPain] = useState([]);
  const [choixGarniture, setChoixGarniture] = useState([]);
  const [choixIngredientViande, setchoixIngredientViande] = useState([]);
  const [choixSupplement, setChoixSupplement] = useState([]);
  const [choixSupplementPizza, setChoixSupplementPizza] = useState([]);
  const [choixSupplementSucree, setChoixSupplementSucree] = useState([]);
  const [choixSupplementFruits, setChoixSupplementFruits] = useState([]);
  const [choixSupplementFrites, setChoixSupplementFrites] = useState([]);
  const [choixIngredientViande_1, setchoixIngredientViande_1] = useState([]);
  const [choixIngredientViande_2, setchoixIngredientViande_2] = useState([]);

  const [ChoixSupplementFromage, setChoixSupplementFromage] = useState([]);
  const [ChoixSupplementViande, setChoixSupplementViande] = useState([]);
  const [ChoixSupplementCrudite, setChoixSupplementCrudite] = useState([]);
  const [ChoixSupplementSauce, setChoixSupplementSauce] = useState([]);
  const [ChoixSupplementPain, setChoixSupplementPain] = useState([]);


  const [choixSupplementSal, setChoixSupplementSal] = useState([]);
  const [choixSauce, setChoixSauce] = useState([]);
  const [choixTaille, setChoixTaille] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [dishesDisplayed, setDishesDisplay] = useState(false);

  // Booleans that will only allow the component to render when the requests have returned the datas
  const [isDataLoading, setDataLoading] = useState(false);
  const [isCategoryLoading, setCategoryLoading] = useState(false);
  const [sideDishesLoading, setSideDishesLoading] = useState(false);
  // activeCarte && (window.document.body.style.overflow = "hidden")

  activeCarte
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");

  const fetchData = async () => {
    sendrequest("get", "produit/", setDatas, setDataLoading);
    
    sendrequest(
      "get",
      "categorie/?ordering=id",
      setMenuCategories,
      setCategoryLoading
    );
    sendrequest(
      "get",
      "supplement/?type_supplement=Boisson",
      setSideDishes
    ); // categorie correspondant aux boissons
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Pain",
      setChoixPain
    ); // categorie correspondant au pain
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Crudite",
      setChoixGarniture
    ); // categorie correspondant à la garniture
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Sauce",
      setChoixSauce
    ); // categorie correspondant à la sauce
    sendrequest(
      "get",
      "supplement/?type_supplement=TaillePizza",
      setChoixTaille
    ); // categorie correspondant à la taille de la pizza
    sendrequest(
      "get",
      "supplement/?type_supplement=Sur_frite",
      setChoixSupplementFrites
    ); // categorie correspondant aux supplements frites
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Viande",
      setchoixIngredientViande
    ); // categorie correspondant aux ingredients viandes
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Viande",
      setchoixIngredientViande_1
    ); // categorie correspondant aux ingredients viandes
    sendrequest(
      "get",
      "ingredient/?type_ingredient=Viande",
      setchoixIngredientViande_2
    ); // supplement correspondant aux ingredients viandes
    sendrequest(
      "get",
      "supplement/?type_supplement=Viande",
      setChoixSupplementViande
    ); // supplement correspondant aux suppléments viandes   
    sendrequest(
      "get",
      "supplement/?type_supplement=Fromage",
      setChoixSupplementFromage
    ); // supplement correspondant aux fromages
    sendrequest(
      "get",
      "supplement/?type_supplement=Crudite",
      setChoixSupplementCrudite
    ); // supplement correspondant aux crudités
    sendrequest(
      "get",
      "supplement/?type_supplement=Sauce",
      setChoixSupplementSauce
    ); // supplement correspondant aux Sauces
    sendrequest(
      "get",
      "supplement/?type_supplement=Pain",
      setChoixSupplementPain
    ); // supplement correspondant aux Pain
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Function that will check through if id of the selected menu item matches the one of 'Menu'. If so then we will want to display all of the datas, not just a selection.
  const isMenu = () => {
    for (var i = 0; i < menuCategories.length; i++) {
      if (
        menuCategories[i].id === active &&
        menuCategories[i].nom === "Menus du Midi"
      ) {
        return datas;
      }
    }
  };

  const selectDishesPerCategory = () => {
    var menuDishes = isMenu();

    if (menuDishes !== undefined) {
      return (
        <MenuType
          datas={datas}
          menuCategories={menuCategories}
          dishesDisplayed={dishesDisplayed}
          setDishesDisplay={setDishesDisplay}
        />
      );
    } else {
      const selectedDishes = datas
        // We filter the data :
        .filter((data) => {
          // By only selecting the data that belongs to a category (categories is an array in which are the different categories to which a dish belongs) that matches the one selected by the user (var active)
          return data.categorie === active;

          /*for (var i = 0; i < data.categories.length; i++) {
            if (data.categories[i] === active) return true;
            return false;
          }*/
        })
        //Once filtered, we can go through the selection to display them
        .map((data) => {
            return (
              <Card
                key={data.id}
                {...data}
                data = {data}

                sideDishes={sideDishes} //Boissons
                setSideDishes={setSideDishes} //Boissons

                choixPain={choixPain}
                setChoixPain={setChoixPain}

                choixGarniture={choixGarniture}
                setChoixGarniture={setChoixGarniture}

                choixSauce={choixSauce}
                setChoixSauce={setChoixSauce}

                choixIngredientViande={choixIngredientViande}
                setchoixIngredientViande={setchoixIngredientViande}

                choixIngredientViande_1={choixIngredientViande_1} // ?
                setchoixIngredientViande_1={setchoixIngredientViande_1}// ?

                choixIngredientViande_2={choixIngredientViande_2}// ?
                setchoixIngredientViande_2={setchoixIngredientViande_2}// ?

                choixSupplement={choixSupplement}
                setChoixSupplement={setChoixSupplement}

                choixSupplementFrites={choixSupplementFrites}
                setChoixSupplementFrites={setChoixSupplementFrites}

                choixTaille={choixTaille}
                setChoixTaille={setChoixTaille}

                choixSupplementPizza={choixSupplementPizza}
                setChoixSupplementPizza={setChoixSupplementPizza}

                ChoixSupplementFromage={ChoixSupplementFromage}
                setChoixSupplementFromage={setChoixSupplementFromage}

                ChoixSupplementViande={ChoixSupplementViande}
                setChoixSupplementViande={setChoixSupplementViande}

                ChoixSupplementCrudite= {ChoixSupplementCrudite}
                setChoixSupplementCrudite= {setChoixSupplementCrudite}

                ChoixSupplementSauce= {ChoixSupplementSauce}
                setChoixSupplementSauce= {setChoixSupplementSauce}

                ChoixSupplementPain = {ChoixSupplementPain}
                setChoixSupplementPain= {setChoixSupplementPain}

              />
            );

          
        });
      return selectedDishes;
    }
  };

  return (
    <div className="commander">
      {/* Loading spining circle displayed */}
      {!isDataLoading && <div className="lds-dual-ring"></div>}

      <div className="commander__container">
        {isCategoryLoading && (
          <Carte
            active={active}
            setActive={setActive}
            activeCarte={activeCarte}
            setActiveCarte={setActiveCarte}
            categories={menuCategories}
            setDishesDisplay={setDishesDisplay}
          />
        )}

        {isDataLoading && (
          <>
            <div className="commander__container__cards">
              {selectDishesPerCategory()}
            </div>

            {/*<div
              className={"commander__carte " + (activeCarte ? "white" : null)}
            >
              <IconButton onClick={() => setActiveCarte(() => !activeCarte)}>
                <i
                  className={"fas fa-arrow-" + (activeCarte ? "left" : "right")}
                ></i>
              </IconButton>
            </div>*/}
          </>
        )}
      </div>
    </div>
  );
};

export default Commander;
