module.exports=async function(context,commands)
{
   const sleep = ms => new Promise(r => setTimeout(r, ms));
     const webdriver = context.selenium.webdriver;
        const driver = context.selenium.driver;
    try{
 
    console.log('before measurement')
    await commands.measure.start('Create-Exam');

    await commands.navigate('https://app-staging.examsforzoom.com/en/users/sign_in');// navigation

    await commands.wait.byXpath("//input[@id='user_email']", 60000);
    await commands.addText.byXpath("shaik.bismilla@qo-box.com","//input[@id='user_email']");// email
    
    await commands.wait.byXpath("//input[@type='password']", 60000);
    await commands.addText.byXpath("qo-box_e4z","//input[@id='user_password']");//  password
    
    await commands.wait.byXpath("//button[@data-testid='button-sign-in']", 60000);
    await commands.click.byXpath("//button[@data-testid='button-sign-in']");    //  click signin button

    await commands.wait.byXpath("//a[@class=' btn btn-blue btn btn-md btn-blue']",50000)
    await commands.click.byXpath("//a[@class=' btn btn-blue btn btn-md btn-blue']"); //click create exam session

    await commands.wait.byXpath("//input[@id='exam_name']",40000);
    await commands.addText.byXpath("test-1","//input[@id='exam_name']")  // exam session name

    await commands.wait.byXpath("//input[@value='UNATTENDED']",40000)
    await commands.click.byXpath("//input[@value='UNATTENDED']")      // exam session type

    await commands.wait.byXpath("//input[@value='SHARE']",40000)
    await commands.click.byXpath("//input[@value='SHARE']");        //  exam session display

     const filter = await driver.findElement(webdriver.By.xpath("//option[@value='Chennai']"),50000);
             await filter.click();                                  //  selecting timezone

     
      await commands.wait.byXpath("//input[@id='exam_start_date']", 50000);
      await commands.click.byXpath("//input[@id='exam_start_date']");
      //await sleep(2000);
      await commands.wait.byTime(5000);
      let examDate = new Date();
      examDate.setDate(examDate.getDate() + 1);
      let tomorrow = examDate.toISOString().slice(0, 10).replace(/-/g, "").trim();
      console.log(tomorrow);
      await commands.addText.byXpath(tomorrow, "//input[@id='exam_start_date']");
      let examHour = new Date().getHours();
      let examMinutes = new Date().getMinutes();
      let examTime = 15 + (examMinutes < 10 ? '0' + examMinutes.toString() : examMinutes.toString());
      console.log(examTime);
      await commands.addText.byXpath(examTime, "//input[@id='exam_start_date']");

      await commands.wait.byTime(5000);

       await commands.wait.byXpath("//input[@type='number']",50000)
        await commands.addText.byXpath("15","//input[@type='number']")         //providing duration

       await commands.wait.byXpath("//input[@value='BASIC']",50000)
       await commands.click.byXpath("//input[@value='BASIC']")          //  Template setting

     await commands.wait.byXpath("//input[@id='exam_proctored_false']",50000)
    await commands.click.byXpath("//input[@id='exam_proctored_false']")   // exam feature
     
     await commands.wait.byXpath("//input[@name='commit']",50000)
      await commands.click.byXpath("//input[@name='commit']")       // exam commit


     await commands.wait.byTime(10000)   ///  waiting for some time after creation of exam

     await commands.wait.byXpath("//a[text()='Log Out']", 50000);
     await commands.click.byXpath("//a[text()='Log Out']");       // logout

   return await commands.measure.stop();

    }
    catch (e) {
        console.log('Inside Catch');
        throw e;
    }
}