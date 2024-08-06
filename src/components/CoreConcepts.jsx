import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { 
              //key prop is added to CoreConcept component to remove key warning. It is used internally by react
            }
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/> )}
          </ul>
        </section>
    );
}