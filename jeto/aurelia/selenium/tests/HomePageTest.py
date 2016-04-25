# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class HomePageTest(unittest.TestCase):

    def setUp(self):
        self.WAIT_TIME = 10;
        self.driver = webdriver.PhantomJS()
        self.driver.implicitly_wait(5)
        self.base_url = "http://localhost/static"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_home_page(self):
        driver = self.driver
        driver.get(self.base_url + "/#")
        for i in range(self.WAIT_TIME):
            try:
                if u"Welcome | Ĵeto" == driver.title: break
            except: pass
            time.sleep(1)
        else: self.fail("time out: "+driver.title)
        self.assertTrue(self.is_element_present(By.LINK_TEXT, u"Ĵeto"))
        self.assertTrue(self.is_element_present(By.LINK_TEXT, "Instances"))
        self.assertTrue(self.is_element_present(By.LINK_TEXT, "Domains"))
        self.assertTrue(self.is_element_present(By.LINK_TEXT, "Security"))
        self.assertEqual(u"Bienvenue sur Ĵeto", driver.find_element_by_css_selector("h1.heading").text)
    
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
