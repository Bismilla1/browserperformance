module.exports = async function (context, commands) {

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    try {
        console.log('Before measurement');
        await commands.measure.start('ExamForZoom Testing');

    await commands.navigate('https://app-staging.examsforzoom.com/en/users/sign_in');

        
        await commands.wait.byXpath("//input[@id='user_email']", 50000);
        await commands.addText.byXpath("poulomita.ghosh@qo-box.com","//input[@id='user_email']");
        
        await commands.wait.byXpath("//input[@id='user_password']", 50000);
        await commands.addText.byXpath("qo-box_e4z","//input[@id='user_password']");
        
        await commands.wait.byXpath("//button[@name='button']", 50000);
        await commands.click.byXpath("//button[@name='button']");
        
        await commands.wait.byXpath("//a[@data-testid='new_btn']", 50000);
        await commands.click.byXpath("//a[@data-testid='new_btn']");
        //var webDriver1 = context.webDriver;
        //var text = webDriver1.byXpath("//button/img[@data-testid='user-avatar']", 50000);
        //console.log(text.getAttribute("data-exam-url"));


      /* await commands.wait.byXpath("//button/img[@data-testid='user-avatar']", 50000);
         await commands.click.byXpath("//button/img[@data-testid='user-avatar']");*/

         //table)[1]//tbody//tr[1]//td[6]//div//div[2]//button
        
         await commands.wait.byXpath("//input[@id='exam_name']", 50000);
         let uniqueName = "DemoExam-" + new Date().toISOString().slice(0, 10)+"-"+new Date().getTime()
         console.log(uniqueName);


         await commands.addText.byXpath(uniqueName,"//input[@id='exam_name']");

         await commands.wait.byXpath("//input[@id='exam_participation_type_share']", 50000);
         await commands.click.byXpath("//input[@id='exam_participation_type_share']");

         const webdriver = context.selenium.webdriver;
         const driver = context.selenium.driver;

        await commands.js.run(
            `const select = window.document.querySelector("select[id='exam_timezone']"); select.selectedIndex=100;select.dispatchEvent(new Event('change'));`
          );

          
         await commands.wait.byXpath("//input[@id='exam_start_date']", 50000);
         await commands.click.byXpath("//input[@id='exam_start_date']");

         await sleep(2000);
         //await commands.wait.byTime(10000);
         let examDate = new Date();
         examDate.setDate(examDate.getDate() + 1);
         //examDate.getDate() + 3

        let tomorrow = examDate.toISOString().slice(0, 10).replace(/-/g,"").trim();
        console.log(tomorrow);

        // const yyyy = today.getFullYear();
        //let mm = today.getMonth() + 1; // Months start at 0!
        //let dd = today.getDate();
        //let finalDate = mm+dd+yyyy;
       // await commands.addText.byXpath(finalDate,"//input[@id='exam_start_date']");

        await commands.addText.byXpath(tomorrow,"//input[@id='exam_start_date']");
       let examHour = new Date().getHours();
       let examMinutes = new Date().getMinutes();
       let examTime = 15 + (examMinutes < 10 ? '0'+ examMinutes.toString()  : examMinutes.toString());
        console.log(examTime);
      

         await commands.addText.byXpath(examTime,"//input[@id='exam_start_date']");
         await commands.wait.byTime(5000);
        
         await commands.wait.byXpath("//input[@id='exam_participation_type_share']", 50000);
  
         await commands.click.byXpath("//input[@id='exam_participation_type_share']");
         console.log('clicked on share button');
       
         await commands.wait.byXpath("//input[@id='exam_duration']", 50000);
         await commands.addText.byXpath("15","//input[@id='exam_duration']");
         console.log('Enterd Exam Duration');
         await commands.wait.byTime(2000);
         
         await commands.wait.byXpath("//input[@type='submit']", 50000);
         await commands.click.byXpath("//input[@type='submit']");
         console.log('clicked on Submit button');

         await commands.wait.byTime(2000);

        await commands.click.byXpath("//*[@id='action-button']//img",50000);
        console.log('clicked on three dots button');
        await commands.wait.byTime(2000);
       // await commands.driver.byXpath("(//table)[1]//tbody//tr[1]//td[6]//div//div[2]//button",5000);

        /* await commands.wait.byXpath("//table[@class='min-w-full']//button[1]", 50000);
        // await commands.click.byXpath("//table[@class='min-w-full']//button[1]");
     ///let urlExam =   await commands.wait.byXpath("(//table[@class='min-w-full']//button[contains(text(),'Copy URL')])[1]", 50000);
      var examUrL = await driver.findElement(webdriver.By.xpath("(//table[@class='min-w-full']//button[contains(text(),'Copy URL')])[1]"));
      console.log(examUrL);
      await commands.wait.byTime(2000);
      console.log(examUrL.getAttribute("data-exam-url"));
      
         //await commands.click.byXpath("(//table[@class='min-w-full']//button[contains(text(),'Copy URL')])[1]");
//table)[1]//tbody//tr[1]//td[6]//button[1]//im
//console.log(urlExam);*/

        await commands.wait.byXpath("//a[text()='Log Out']", 50000);
        await commands.click.byXpath("//a[text()='Log Out']");

       return commands.measure.stop();
    }
    catch (e) {

        console.log('Inside Catch');
        throw e;
    }
  }
 