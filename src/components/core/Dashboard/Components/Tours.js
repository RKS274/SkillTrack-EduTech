import Card from './Card'


function Tours({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className=''></h2>
            </div>
            <div className='cards'>
            {
                //haar ek tour(city) k liia card return jo ki haar ek s map hgi
                tours.map((tour)=>{
                    //(...tour) isse jo tours ki values thi unhe same copy snd krrdia
                    //cloning krr dii saati data tours m aai firr tours jo h tour m chlli gyi
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
            </div>
        </div>
    );
}
export default Tours;