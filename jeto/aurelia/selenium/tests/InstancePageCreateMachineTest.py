# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class InstancePageCreateMachineTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(1)
        self.base_url = "localhost:9000"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_instance_page_create_machine(self):
        driver = self.driver
        driver.get(self.base_url + "#/instances")
        for i in range(5):
            try:
                if u"Instances | Ĵeto" == driver.title: break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        self.assertEqual("Instances", driver.find_element_by_css_selector(".header h3").text)
        driver.find_element_by_id("openCreateMachineButton").click()
        for i in range(5):
            try:
                if self.is_element_present(By.CSS_SELECTOR, ".modal.fade.au-target.in"): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        time.sleep(1)
        self.assertEqual("Create a new machine", driver.find_element_by_css_selector(".modal-title").text)
        self.assertTrue(driver.find_element_by_css_selector("#emptyProjectMessage").is_displayed())
        self.assertFalse(driver.find_element_by_css_selector("#gitReferencePanel").is_displayed())
        driver.execute_script(" $('#project-machine').val('18').trigger('change') ");
        self.assertTrue(driver.find_element_by_css_selector("#gitReferencePanel").is_displayed())
        self.assertFalse(driver.find_element_by_css_selector("#emptyProjectMessage").is_displayed())
        self.assertTrue(self.is_element_present(By.CSS_SELECTOR, "#git.active"))
        self.assertFalse(self.is_element_present(By.CSS_SELECTOR, "#url.active"))
        driver.find_element_by_id("#url").click()
        self.assertFalse(self.is_element_present(By.CSS_SELECTOR, "#git.active"))
        self.assertTrue(self.is_element_present(By.CSS_SELECTOR, "#url.active"))
        driver.find_element_by_id("machine-modal-save").click()
        self.assertTrue(driver.find_element_by_id("errorMessage").is_displayed())
        self.assertRegexpMatches(driver.find_element_by_css_selector("span.text-red").text, r"^[\s\S]*choose an host[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[2]").text, r"^[\s\S]*choose an environment[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[3]").text, r"^[\s\S]*choose a machine name[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[4]").text, r"^[\s\S]*choose an archive url[\s\S]*$")
        driver.find_element_by_id("archive-url").clear()
        driver.find_element_by_id("archive-url").send_keys("test-url")
        driver.find_element_by_id("machine-modal-save").click()
        self.assertFalse(self.is_element_present(By.XPATH, "//div[@id='errorMessage']/span[4]"))
        driver.find_element_by_css_selector("#errorMessage > button.close.au-target").click()
        self.assertFalse(driver.find_element_by_id("errorMessage").is_displayed())
        driver.find_element_by_id("#git").click()
        driver.find_element_by_id("machine-modal-save").click()
        self.assertRegexpMatches(driver.find_element_by_css_selector("span.text-red").text,r"^[\s\S]*choose an host[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[2]").text, r"^[\s\S]*choose an environment[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[3]").text, r"^[\s\S]*choose a machine name[\s\S]*$")
        self.assertRegexpMatches(driver.find_element_by_xpath("//div[@id='errorMessage']/span[4]").text, r"^[\s\S]*choose a git reference[\s\S]*$")
        driver.execute_script(" $('#host-machine').val('2').trigger('change') ");
        driver.execute_script(" $('#environment-machine').val('qa').trigger('change') ");
        driver.find_element_by_id("name").clear()
        driver.find_element_by_id("name").send_keys("Machine name test")
        driver.execute_script(" $('#gitReference').val('master').trigger('change') ");
        driver.find_element_by_id("machine-modal-save").click()
        self.assertFalse(driver.find_element_by_id("errorMessage").is_displayed())
        for i in range(5):
            try:
                if driver.find_element_by_id("loadingMessage").is_displayed(): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        for i in range(5):
            try:
                if driver.find_element_by_id("successMessage").is_displayed(): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        driver.find_element_by_css_selector("button.close.au-target").click()
        self.assertFalse(driver.find_element_by_id("successMessage").is_displayed())
        driver.find_element_by_css_selector("#machine-modal .close").click()
        self.assertFalse(self.is_element_present(By.CSS_SELECTOR, ".modal.fade.au-target.in"))
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
