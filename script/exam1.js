module.exports = async function (context, commands) {

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await commands.navigate('https://app.examsforzoom.com/');
    try {
      console.log('Before measurement');
      await commands.measure.start('Host ExamForZoom Testing');
      await commands.wait.byXpath("//input[@id='user_email']", 50000);
      await commands.addText.byXpath("host1@qobox.com", "//input[@id='user_email']");//user name
      await commands.wait.byXpath("//input[@id='user_password']", 50000);
      await commands.addText.byXpath("qoboxhost123", "//input[@id='user_password']");//user password
      await commands.wait.byXpath("//button[@name='button']", 50000);
      await commands.click.byXpath("//button[@name='button']");             //login
      await commands.wait.byXpath("//a[@data-testid='new_btn']", 50000);
      await commands.click.byXpath("//a[@data-testid='new_btn']");             //click create exam
      await commands.wait.byXpath("//input[@id='exam_name']", 50000);
      let uniqueName = "DemoExam-" + new Date().toISOString().slice(0, 10) + "-" + new Date().getTime()
      console.log(uniqueName);
      await commands.addText.byXpath(uniqueName, "//input[@id='exam_name']");    // session name
      await commands.wait.byXpath("//input[@id='exam_participation_type_share']", 50000);
      await commands.click.byXpath("//input[@id='exam_participation_type_share']");   // session type
      const webdriver = context.selenium.webdriver;
      const driver = context.selenium.driver;
      await commands.js.run(
        `const select = window.document.querySelector("select[id='exam_timezone']"); select.selectedIndex=100;select.dispatchEvent(new Event('change'));`
      );                                                                                 // timezone
      await commands.wait.byXpath("//input[@id='exam_start_date']", 50000);
      await commands.click.byXpath("//input[@id='exam_start_date']");      //click on start date
      await sleep(2000);
      let examDate = new Date();
      examDate.setDate(examDate.getDate() + 1);
      let tomorrow = examDate.toISOString().slice(0, 10).replace(/-/g, "").trim();
      console.log(tomorrow);
      await commands.addText.byXpath(tomorrow, "//input[@id='exam_start_date']"); // selecting date
      let examHour = new Date().getHours();
      let examMinutes = new Date().getMinutes();
      let examTime = 15 + (examMinutes < 10 ? '0' + examMinutes.toString() : examMinutes.toString());
      console.log(examTime);
      await commands.addText.byXpath(examTime, "//input[@id='exam_start_date']");// selecting time
      await commands.wait.byTime(5000);
      await commands.wait.byXpath("//input[@id='exam_participation_type_share']", 50000);
      await commands.click.byXpath("//input[@id='exam_participation_type_share']"); // share type
      console.log('clicked on share button');
      await commands.wait.byXpath("//input[@id='exam_duration']", 50000);
      await commands.addText.byXpath("15", "//input[@id='exam_duration']");         // duration
      console.log('Enterd Exam Duration');
      await commands.wait.byTime(2000);
      await commands.wait.byXpath("//input[@type='submit']", 50000);
      await commands.click.byXpath("//input[@type='submit']");             //click on commit exam
      console.log('clicked on Submit button');
      await commands.wait.byTime(20000);
      await commands.click.byXpath("//*[@id='action-button']//img", 50000);
      console.log('clicked on three dots button');                         // click on 3 dots to copy url
      await commands.wait.byTime(2000);
      await commands.wait.byXpath("//table[@class='min-w-full']//button[1]", 50000);
      await commands.click.byXpath("//table[@class='min-w-full']//button[1]");
      var examUrL = await driver.findElement(webdriver.By.xpath("(//table[@class='min-w-full']//button[contains(text(),'Copy URL')])[1]"));
      await commands.wait.byTime(2000);                               // clicking on copy url
      let url = await examUrL.getAttribute("data-exam-url")         // storing the content of examUrl 
      console.log("the url is " + url);

      await commands.wait.byTime(2000);
      await commands.wait.byXpath("//p[text()='Go to exam']", 3000);
      await commands.click.byXpath("//p[text()='Go to exam']");    // go to exam as a host

      await commands.wait.byTime(4000);

      await commands.wait.byXpath("//button[text()='Next']", 2000);
      await commands.click.byXpath("//button[text()='Next']");      //instructions 
      await commands.wait.byTime(5000);
      await commands.wait.byXpath("//button[text()='Start session']",8000);
  
      await commands.click.byXpath("//button[text()='Start session']"); // start session 
      //commands.measure.stop()
     // await commands.wait.byXpath("//a[text()='Log Out']", 50000);
      //await commands.click.byXpath("//a[text()='Log Out']");

      //await commands.measure.stop();
      await commands.wait.byTime(5000);

      await commands.switch.toNewWindow();
      
      await commands.measure.start('Participant ExamForZoom Testing', 5000);
      await commands.navigate(url);
      await commands.wait.byTime(7000);
      await commands.wait.byXpath("//input[@id='user_email']", 50000);
      await commands.addText.byXpath("participant1@qobox.com", "//input[@id='user_email']");
      await commands.wait.byXpath("//input[@id='user_password']", 50000);
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
      
      
      await commands.measure.stop();
      await commands.wait.byTime(40000);

      //await commands.wait.byXpath("//a[text()='Log Out']", 50000);
      //await commands.click.byXpath("//a[text()='Log Out']");
      //return commands.measure.stop();
    }
    catch (e) {
  
      console.log('Inside Catch');
      throw e;
    }
  }

  
  