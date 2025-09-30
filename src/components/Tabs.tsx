import React from "react";

type TabsProps = {
    children: React.ReactNode;
    buttons?: React.ReactNode;
    buttonsContainer?: React.ElementType;
};

export default function Tabs(props: TabsProps) {
    const ButtonsContainer = props.buttonsContainer || "div";
    return (
        <>
            <ButtonsContainer>
                {props.buttons}
            </ButtonsContainer>
            {props.children}
        </>
    );
}