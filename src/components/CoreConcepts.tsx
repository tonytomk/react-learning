import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
   <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept {...concept} key={concept.title}/> )}
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title } 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcepts title={CORE_CONCEPTS[1].title } 
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}/>
            <CoreConcepts title={CORE_CONCEPTS[2].title } 
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}/>
           <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            {/* <CoreConcepts title="Core Concepts" 
            description="Lorem"
            image={compImage}/> */}
          </ul>
        </section>
  );
}