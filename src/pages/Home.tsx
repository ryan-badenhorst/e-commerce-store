import { Link } from "react-router-dom"

import homeHero from "../images/home-hero.jpg"
import mensHome from "../images/mens-home.jpg"

export default function Home() {
    return (
        <>  
            <div className="relative">
                <img
                    src={homeHero}
                    alt="A man and a woman wearing jewelry in an everyday setting"
                    className="w-full"
                />

                <div className="absolute inset-0 flex items-center">
                    <div className="ml-25">
                        <h1 className="text-4xl font-serif font-bold text-amber-700 flex flex-col">
                            <span className="mb-4">Elevate the Everyday</span>
                            
                            Jewellery and accessories <span className="new-line">designed to elevate the everyday</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mx-25 my-5">
                
                <h1 className="font-serif text-center text-4xl mb-5">Explore Our Collections</h1>

                <div className="flex flex-row gap-5 justify-between">
                    <Link to="/products?gender=men" className="home-link">
                        <img src={mensHome} alt="Mens jewelry" />

                        <div className="home-overlay"></div>

                        <span>For men</span>
                    </Link>
                    <Link to="#" className="home-link">For woman</Link>
                    <Link to="#" className="home-link">For everyone</Link>
                </div>
            </div>
        </>
    )
}