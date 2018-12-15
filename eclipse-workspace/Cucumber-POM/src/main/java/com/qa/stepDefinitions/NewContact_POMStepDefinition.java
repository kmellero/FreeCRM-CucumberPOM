package com.qa.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.ContactsPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewContact_POMStepDefinition extends TestBase {
	LoginPage loginpage;
	HomePage homepage;
	ContactsPage contactspage;
	
	@Given("^user logged in and is on home page$")
	public void user_logged_in_and_is_on_home_page() {
		try {
			TestBase.initialization();
			loginpage = new LoginPage();
			String pageTitle = loginpage.validateLoginPageTitle();
			Assert.assertEquals("login page title mismatch", "#1 Free CRM software in the cloud for sales and service", pageTitle);
			homepage = new HomePage();
			homepage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
			String homepageTitle = homepage.validateHomePageTitle();
			Assert.assertEquals("home page title mismatch", "CRMPRO", homepageTitle);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		
	}

	@Then("^user hover over contacts link and clicks on New Contact link$")
	public void user_hover_over_contacts_link_and_clicks_on_New_Contact_link() {
		contactspage = new ContactsPage();
		driver.switchTo().frame("mainpanel"); 
		homepage.clickOnNewContactLink();
		boolean flag = contactspage.verifyNewContactFormTitle();
		Assert.assertTrue(flag);

	}


	@Then("^user enters \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_Names(String title, String ftName, String ltName, String comp) {
		contactspage.createNewContact(title, ftName, ltName, comp);
	}

/* already done above
 	@Then("^user clicks on Save Btn$")
	public void user_clicks_on_Save_Btn() {
		
	}*/

	@Then("^verify new contact \"([^\"]*)\" and \"([^\"]*)\" created$")
	public void verify_new_contact_and_created(String ftName, String ltName) {
		contactspage.clickContactsTab();
		String name = ftName + " " + ltName;
		System.out.println("new contact name is: "+ name);
		boolean flag = contactspage.selectContactsByName(name);
		Assert.assertTrue(flag);
	}

	@Then("^delete new contact \"([^\"]*)\" and \"([^\"]*)\"$")
	public void delete_new_contact(String ftName, String ltName) {
		String bName = ftName + " " + ltName;
		if(contactspage.selectContactsByName(bName))  {
			driver.findElement(By.xpath("(//a[contains(text(),'" +bName+ "')]//parent::td//following-sibling::td)//a/i[@title='Delete']")).click();
			Alert alert = driver.switchTo().alert();
			System.out.println(alert.getText());
			alert.accept();
		}else {
			System.out.println("either no such name or no alert"); 
		}
	}
	
	@Then("^tear down$")
	public void tear_down() {
		driver.quit();
	}
}
