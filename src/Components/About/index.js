function About () {
    return (
        <div className="mx-10 pt-20 pb-10 md:pt-24 lg:pt-28 xl:mx-32 2xl:mx-52 2xl:pt-32 2xl:pb-10 min-[1918px]:mx-96"> 
            <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-10">
                <img className="w-52 h-max lg:w-96" src="./img/About/logo kata group.png"></img>
                <p className="text-black text-sm text-center sm:text-left lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis error officia voluptatibus dolores sequi quae molestias totam natus porro 
                quibusdam aut et ipsum saepe voluptates nam eaque accusantium quidem eos aliquid a, illo pariatur
                accusamus aperiam! Cum cumque similique, soluta esse possimus, amet quia facilis maiores laborum error ut
                mollitia veritatis aperiam delectus architecto consequatur ipsa consequuntur? Minima saepe beatae inventore magnam 
                ratione voluptatem hic ducimus ullam quas non, aut a omnis velit aperiam numquam ut. Consequuntur repellendus sunt inventore 
                obcaecati itaque consequatur ut natus, fuga possimus suscipit earum libero atque officiis ratione ab 
                debitis aut. Et earum itaque dolorum.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-16 mt-10 sm:mt-16 font-bold">
                <div className="flex flex-col justify-between text-center">
                    <h1 className="text-black mb-4">Suku Kata Coffee</h1>
                    <img className="h-36 lg:h-56 object-cover" src="./img/About/suku kata.jpg" alt="Brand Kata Group"></img>
                </div>
                <div  className="flex flex-col text-center justify-between">
                    <h1 className="text-black mb-4">Sakuta Coffee</h1>
                    <img className="h-36 lg:h-56 object-cover " src="./img/About/sakuta.jpg" alt="Brand Kata Group"></img>
                </div>
                <div  className="flex flex-col justify-between text-center">
                    <h1 className="text-black mb-4">Quickie Haircut</h1>
                    <img className="h-36 lg:h-56 object-cover" src="./img/About/quickie haircut.jpg" alt="Brand Kata Group"></img>
                </div>
                <div  className="flex flex-col justify-between text-center">
                    <h1 className="text-black mb-4">Kost Ridhan Kemandoran</h1>
                    <img className="h-36 lg:h-56 object-cover" src="./img/About/kost ridhan kemandoran.png" alt="Brand Kata Group"></img>
                </div>
                <div  className="flex flex-col justify-between text-center">
                    <h1 className="text-black mb-4">Kost Ridhan Rempoa</h1>
                    <img className="h-36 lg:h-56 object-cover" src="./img/About/kost ridhan ciputat.jpg" alt="Brand Kata Group"></img>
                </div>
                <div  className="flex flex-col justify-between text-center">
                    <h1 className="text-black mb-4">Kost Ridhan Tangerang</h1>
                    <img className="h-36 lg:h-56 object-cover" src="./img/About/kost ridhan tangerang.jpg" alt="Brand Kata Group"></img>
                </div>
            </div>
        </div>
    )

    
}

export default About