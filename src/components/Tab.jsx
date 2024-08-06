export default function Tab({children, buttons, ButtonsContainer = 'menu'}) {

    // if you follow camelcase for the ButtonsContainer variable like buttonsContainer, 
    // you have to reassign it to a variable having first uppercase letter
    // let ButtonsContainer = buttonsContainer

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}