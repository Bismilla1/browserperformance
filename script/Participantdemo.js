

module.exports = async function (context, commands) {
    try {

        console.log('before measurement')

        await commands.measure.start('participant signin')
        await commands.navigate('https://app-staging.examsforzoom.com/en/users/sign_in')

        await commands.wait.byXpath("//input[@id='user_email']", 60000);
        await commands.addText.byXpath("bismillask1@gmail.com", "//input[@id='user_email']")

        await commands.wait.byXpath("//input[@type='password']", 60000);
        await commands.addText.byXpath("@Tosswin123", "//input[@id='user_password']");

        await commands.wait.byXpath("//button[@data-testid='button-sign-in']", 60000);
        await commands.click.byXpath("//button[@data-testid='button-sign-in']"); //login

        await commands.wait.byXpath("//a[@class='text-blue font-medium']", 60000);
        await commands.click.byXpath("//a[@class='text-blue font-medium']");//  click on demo

        await commands.wait.byXpath("//a[@id='next-url']", 60000);
        await commands.click.byXpath("//a[@id='next-url']");   // click on welcome dashboard next

        await commands.wait.byXpath("//button[@type='button']", 60000);
        await commands.click.byXpath("//button[@type='button']");  //  click on instruction dashboard next

        await commands.wait.byXpath("//div[@class='w-full flex bg-white items-center justify-center']", 60000);

        await commands.click.byXpath("//div[@class='w-full flex bg-white items-center justify-center']");
        await commands.wait.byXpath("//button[contains(text(),'Next')]", 60000);
        await commands.click.byXpath("//button[contains(text(),'Next')]");

        return await commands.measure.stop();

    }
    catch (e) {
        console.log('inside exception')
        throw e
    }
}