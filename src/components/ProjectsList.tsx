
import PortfolioItem from './PortfolioItem';
import {data} from './data.ts'

export default function ProjectsList(){
    return(
        <>
        <section className="portfolio-grid">
            {data.map((item, index) => (
              
            <PortfolioItem 
              key={index}
              id={item.id}
              project={item.project}  
              comment={item.comment} 
              date={item.date} 
              description={item.description} 
              source={item.source} 
              gif={item.gif}
              images={item.images}
            />
            ))}
        </section>
        </>);
        
}