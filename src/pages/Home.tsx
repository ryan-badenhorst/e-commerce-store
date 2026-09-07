import homeHero from "../images/home-hero.jpg"

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

            <div className="mx-34 my-10">
                
                <h1>Explore Our Collections</h1>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio delectus molestias corporis, non dolorum unde, a fuga vel placeat officia aperiam molestiae sed aut fugiat cupiditate iure excepturi blanditiis, aspernatur quia. Expedita nam et incidunt quae voluptatum iste vel, quidem saepe officia, animi tenetur explicabo debitis labore sed architecto sequi?
                </p>

                <button>Products for men</button>
                <button>Products for woman</button>
                <button>Products for all</button>
            </div>
        </>
    )
}