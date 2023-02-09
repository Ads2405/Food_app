import React from 'react'
import { Link } from 'react-router-dom'



export const HomePage = () => {
  
  return (
    <>
    <div className='homePage'>
      <div className='effect'>
      <h2 className='heading'>Ichiraku-Ramen</h2>
      <p className='intro'>Enjoy The Premium Meals from Hundreds of Mouth-Watering Dishes.</p>
      <br/>
      </div>
{/* PSUEDO-SPACING */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className='orderBtn'><Link to="/Menu"><button>Order Now</button></Link></div>
    </div>
    <div className='container my-5 '>
    <h4>About Us:</h4>
    <p>Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality.[1] Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs.</p>
    <p> Ramen Ichiraku prospers; in Konoha Hiden, this is explained to be because of customers' hopes of either seeing Naruto there or simply a desire to emulate him and his successes. The second Ramen Ichiraku is ill-suited for this increased business, so it is remodeled and expanded into an indoor restaurant at some poin</p>
    </div>
    <hr/>
 
    <footer>
      <div className='container text-center my-4'>
        <h4>Contact Us:</h4>
        <div className='contact'>
          <section className='contact1'>
           <p>ichirakuramennaruto@konoha.com</p>

           <p>425254252</p>
          </section>
        </div>
      </div>
    </footer>
    </>
  )
}
