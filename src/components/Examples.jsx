import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);

    // the selectedTopic is only updated after the App Component function is executed again. The setSelectedTopic is scheduled
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (<div id = "tab-content">
      <h2>{EXAMPLES[selectedTopic].title}</h2>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }

    return (
        <Section title = "Examples" id = "examples">
          <Tab ButtonsContainer = "menu" buttons = {
            <>
                <TabButton isSelected={selectedTopic==="components"} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onClick={() => handleSelect('state')}>State</TabButton>
            </>
          }>
          { tabContent }
          </Tab>
        </Section>
    );
}