import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {

    type ExampleKey = keyof typeof EXAMPLES;
    let tabContent = <p>Please select a topic</p>;

    const [selectedTopic, setSelectedTopic] = useState<ExampleKey | null>(null);
    function handleClick(value: ExampleKey) {
        setSelectedTopic(value);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
  return (
            <Section title="Examples" id="examples">
                <Tabs 
                buttonsContainer="menu"
                buttons={<>
                     <TabButton 
                isSelected={selectedTopic === 'Components'}
                onClick={() => handleClick('Components') }>Components</TabButton>
                <TabButton 
                isSelected={selectedTopic === 'Tsx'}
                onClick={() => handleClick('Tsx')}>Tsx</TabButton>
                <TabButton 
                isSelected={selectedTopic === 'Props'}
                onClick={() => handleClick('Props')}>Props</TabButton>
                <TabButton 
                isSelected={selectedTopic === 'React'}
                onClick={() => handleClick('React')}>React</TabButton>
                </>}>{tabContent}
                </Tabs>
            </Section>
  );
}