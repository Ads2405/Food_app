import React from 'react'
import FoodItems from './FoodItems';
// import PropTypes from 'prop-types'
// import {useState} from "react";

const Menu = () => {
  // const[foodcard,setFoodcard] = useState([])
  const fooditem = [
    {"title":"Homemade Shoyu Ramen","description":"Braised pork belly, aka a little slice of heaven, is the star in this amazing homemade ramen.","kind":"Non-Veg","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-ramen-vertical-084-1550016788.jpg?crop=0.9995002498750624xw:1xh;center,top&resize=980:*" ,"price":"300"  },

    {"title":"Pika-Pok Ramen","description":"Have fun customizing these ramen noodles with your favorite veggies and frozen peas or halved snow peas.","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210701-tiktok-ramen-01-landscape-jg-1664204410.jpg?crop=0.4530612244897959xw:1xh;center,top&resize=980:*" ,"kind":"Veg" ,"price":"250"}

  ,{"title":"Warm Tahini Ramen Noodles","description":"This quick and satisfying meal lands somewhere between savory instant ramen and creamy peanut noodles.","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-122021-warm-tahini-noodles-01-jg-1664204226.jpg?crop=0.478xw:1.00xh;0.306xw,0&resize=980:*" ,"kind":"Veg","price":"500"}

  ,{"title":"Chicken Ramen Soup","description":"When we're in the mood for something that has a bit more flavor than your run of the mill canned soup.","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/39/1474917402-delish-ramen-chicken-noodle.jpg?crop=1xw:0.99975xh;center,top&resize=980:*" ,"kind":"Non-Veg","price":"350"}

  ,{"title":"Dan-Dan Noodles","description":"Originating from Chinese Sichuan cooking,often include sesame paste, peanut butter, or tahini, like ours does.","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190226-dan-dan-noodles-290-1552085454.jpg?crop=1xw:1xh;center,top&resize=980:*","kind":"Veg" ,"price":"200"}

,{"title":"Vegan Ramen","description":"Vegan dish uses layers of umami-packed flavor to mimic the depth complexity of traditional ramen, and edamame for a protein boost ","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-veganramen-052-1611955828.jpg?crop=0.835xw:1.00xh;0.0375xw,0&resize=980:*" ,"kind":"Veg","price":"150"}

,{"title":"Ramen Noodle Salad","description":"There's plenty of crunch from cabbage, carrot ribbons, and toasted ramen noodles, and tossed in a sweet and sour dressing.","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-ramen-noodle-salad-vertical-1535412538.jpg?crop=0.8887492143306097xw:1xh;center,top&resize=980:*","kind":"Veg" ,"price":"200"}

,{"title":"Mongolian Ramen","description":"Tossed with another nostalgic favorite, ramen noodles, this is instant comfort in a skillet. Roasted Chicken pieces adds to the flavour.","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mongolian-beef-ramen-1-1664203760.jpg?crop=0.6675347222222222xw:1xh;center,top&resize=980:*","kind":"Non-Veg" ,"price":"250"}

,{"title":"BreakFast Ramen","description":"ramen is the ideal umami vehicle for cheesy eggs and bacon. If you love this, you'll really love our ramen carbonara!","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/16/1461268237-shot-3-321.jpg?crop=1xw:0.99975xh;center,top&resize=980:*","kind":"Veg" ,"price":"250"}

,{"title":"Crunchy Mandarin Chicken Salad","description":"Chinese Chicken Salad at The Cheesecake Factory, where they use wonton strips and crispy rice noodles. ","foodImg":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190530-asian-chicken-mandarin-salad-237-portrait-pf-1559743395.png?crop=0.9997369113391213xw:1xh;center,top&resize=980:*","kind":"Non-Veg" ,"price":"250"}

,{"title":"Ramen Noodle with Steak","description":"It's the perfect carb to incorporate into this stir-fried steak. We also love this with udon noodles too!","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/08/1456159099-delish-ramen-skillet.jpg?crop=1xw:0.99975xh;center,top&resize=980:*","kind":"Non-Veg" ,"price":"220"}

,{"title":"Cheesy Ramen Carbonara","description":"We took all the classic flavor of a decadent spaghetti carbonara and added it to instant ramen noodles. ","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/05/1486157855-delish-ramen-carbonara-pin-3.jpg?crop=0.999546485260771xw:1xh;center,top&resize=980:*","kind":"Veg" ,"price":"180"}

,{"title":"Ramen Burger","description":"We fry up the ramen noodles into bun-sized discs to create an irresistibly crunchy alternative to a normal, fluffy bun.","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/17/1493418455-delish-ramen-burgers-pin-07.jpg?crop=0.999546485260771xw:1xh;center,top&resize=980:*","kind":"Veg" ,"price":"350"}

,{"title":"Sesame Chicken Ramen","description":"This sesame chicken and broccoli skillet is a fun and easy weeknight dinner the whole family will love.","foodImg":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/49/1512510297-sesame-chicken-ramen-skillet-vertical-003.jpg?crop=0.999546485260771xw:1xh;center,top&resize=980:*","kind":"Non-Veg" ,"price":"400"}

  ];
  return(

    <>
      <div className='mainDiv'>
        <br/>
        <h1 className='text-center'><u>MENU</u></h1>

        <div className='parent'>
        {fooditem.map((element) => {
                return (
                  <div className="row" id="gridLayout" key={element.title}>
                    <FoodItems title={element.title} description={element.description} price={element.price} foodImg={element.foodImg} kind={element.kind}/>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              You Sure Want to add?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
            
            </div>
          </div>
        </div>
      </div>

    </> 
      )
    
}
export default Menu;