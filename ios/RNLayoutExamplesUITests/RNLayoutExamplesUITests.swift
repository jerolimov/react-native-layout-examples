//
//  RNLayoutExamplesUITests.swift
//  RNLayoutExamplesUITests
//
//  Created by Christoph Jerolimov on 22.11.15.
//  Copyright © 2015 Facebook. All rights reserved.
//

import XCTest

class RNLayoutExamplesUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        let app = XCUIApplication()
        setLanguage(app)
        app.launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
      
      
      let app = XCUIApplication()
      let content = app.otherElements["  Simple BorderLayoutExample1  Simple BorderLayoutExample2  Simple BorderLayoutExample3  Simple BorderLayoutExample4"]
      
      content.otherElements[" Simple BorderLayoutExample1"].tap()
      sleep(1)
      snapshot("BorderLayoutExample1")
      
      app.otherElements["  Examples"].otherElements[" Examples"].tap()
      sleep(1)
      
      content.otherElements[" Simple BorderLayoutExample2"].tap()
      sleep(1)
      snapshot("BorderLayoutExample2")
      
      app.otherElements["  Examples"].otherElements[" Examples"].tap()
      sleep(1)
      
      content.otherElements[" Simple BorderLayoutExample3"].tap()
      sleep(1)
      snapshot("BorderLayoutExample3")
      
      app.otherElements["  Examples"].otherElements[" Examples"].tap()
      sleep(1)
      
      content.otherElements[" Simple BorderLayoutExample4"].tap()
      sleep(1)
      snapshot("BorderLayoutExample4")
      
      app.otherElements["  Examples"].otherElements[" Examples"].tap()
      sleep(1)
      
      
    }
    
}
