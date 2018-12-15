package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.qa.util.TestBase;

public class ContactsPage extends TestBase{

	@FindBy(xpath="//td[contains(text(),'Contacts')]")
	WebElement contactsLabel;
	
	@FindBy(xpath="//legend[contains(text(),'Contact Information') and @class='fieldset']")
	WebElement newContactFormTitle;
	
	@FindBy(id="first_name")
	WebElement firstName;
	
	@FindBy(id="surname")
	WebElement lastName;
	
	@FindBy(id="client_lookup")
	WebElement company;
	
	@FindBy(xpath="//input[@type='submit' and @value='Save']")
	WebElement saveBtn;
	
	@FindBy(xpath = "//a[@title='Contacts']")
	WebElement contactsTab;
	
	@FindBy(xpath = "//input[@value='Export']")
	WebElement exportBtn;
	
	@FindBy(xpath = "//strong[contains(.,'Name')]")
	WebElement nameLabel;
	
	@FindBy(xpath = "//i[@title='Delete' and @class='fa fa-trash-o']")
	WebElement deleteBinIcon;
	//Initializing the Page Objects
	public ContactsPage() {  //constructor
		
		PageFactory.initElements(driver, this);  //driver from TestBase class, above PageFactory vars of"this"=ContactsPage
	}	

	//Actions
	public boolean verifyContactsLabel() {
		return contactsLabel.isDisplayed();
	}
	
	public boolean verifyNewContactFormTitle() {
		return newContactFormTitle.isDisplayed();
	}
	
	public boolean selectContactsByName(String name) {
		return driver.findElement(By.xpath("//a[contains(text(),'" + name + "')]/parent::td//preceding-sibling::td//input[@name='contact_id']")).isDisplayed();   //click();

	}
	
	public void createNewContact(String title, String ftName, String ltName, String comp) {
		Select select = new Select(driver.findElement(By.name("title")));
		select.selectByVisibleText(title);
		firstName.sendKeys(ftName);
		lastName.sendKeys(ltName);
		company.sendKeys(comp);
		saveBtn.click();
	}
	
	public void clickContactsTab() {
		contactsTab.click();
			}
	
	public boolean verifyNameLabel() {
		return nameLabel.isDisplayed();
	}
	
	public void deleteContactByDeleteBinIcon() {
		deleteBinIcon.click();
	}
}
