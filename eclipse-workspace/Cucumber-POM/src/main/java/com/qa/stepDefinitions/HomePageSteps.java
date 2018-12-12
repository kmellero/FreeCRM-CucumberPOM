package com.qa.stepDefinitions;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends TestBase{

	LoginPage loginpage;
	HomePage homepage;
	
	@Given("^user opens browser$")
	public void user_opens_browser() {
		TestBase.initialization();
	}

	@Then("^user is on Login Page$")
	public void user_is_on_Login_Page() {
		loginpage = new LoginPage();
		String title = loginpage.validateLoginPageTitle();
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}

	@Then("^user logs into app$")
	public void user_logs_into_app() {
		try {	
			homepage = new HomePage();
			homepage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("^validate home page title$")
	public void validate_home_page_title() {
		String Htitle = homepage.validateHomePageTitle();
		Assert.assertEquals("CRMPRO", Htitle);
	} 

	@Then("^validate logged user name$")
	public void validate_logged_user_name() {
		driver.switchTo().frame("mainpanel");  
		boolean flag =  homepage.validateUserName();
		Assert.assertTrue(flag);
	}
}
