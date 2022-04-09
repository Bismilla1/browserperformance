

module.exports = async function (context,commands){
    const sleep = ms => new Promise(r => setTimeout(r, ms));

await commands.navigate('https://app.examsforzoom.com/en/exams/075e5dff-bd9d-4666-8489-29f342714a4b/');
await commands.measure.start('Participant ExamForZoom Testing');

await commands.wait.byTime(7000);
await commands.wait.byXpath("//input[@id='user_email']", 5000);
await commands.addText.byXpath("participant1@qobox.com", "//input[@id='user_email']");
await commands.wait.byXpath("//input[@id='user_password']", 5000);
await commands.addText.byXpath("qoboxparticipant123", "//input[@id='user_password']");

await commands.wait.byXpath("//button[@name='button']", 5000);
await commands.click.byXpath("//button[@name='button']");
await commands.wait.byTime(3000);
await commands.wait.byXpath("//a[@id='next-url']", 3000);
await commands.click.byXpath("//a[@id='next-url']");
await commands.wait.byTime(4000);


await commands.wait.byXpath("//button[text()='Next']", 50000);
await commands.click.byXpath("//button[text()='Next']");

await commands.wait.byTime(4000);


await commands.wait.byXpath("//button[text()='Next']", 50000);
await commands.click.byXpath("//button[text()='Next']");

await commands.wait.byTime(4000);


await commands.wait.byXpath("//button[text()='Continue']", 50000);
await commands.click.byXpath("//button[text()='Continue']");


await commands.wait.byTime(4000);


await commands.wait.byXpath("//button[text()='Go to screen sharing settings']", 50000);
await commands.click.byXpath("//button[text()='Go to screen sharing settings']");


return commands.measure.stop();
}