# Web Vulnerability Lab Practice

## Overview

Set up a local environment to practice identifying and exploiting common web vulnerabilities. Used intentionally vulnerable applications to understand how security flaws work and how to test for them.

## What I Tested

- SQL injection in login forms and search parameters
- Cross-site scripting (XSS) in user input fields
- Authentication bypass techniques
- Session management weaknesses
- File upload vulnerabilities

## Tools Used

- OWASP WebGoat for guided exercises
- Burp Suite Community Edition for intercepting requests
- sqlmap for automated SQL injection testing
- Browser developer tools for analyzing client-side code

## What I Learned

Understanding vulnerabilities from an attacker's perspective helped me see why certain coding practices matter. I learned how to manually test for SQL injection by manipulating query parameters and saw firsthand how unsanitized input can break application logic.

Working with Burp Suite taught me how HTTP requests and responses work at a deeper level. I practiced intercepting traffic, modifying requests, and observing how applications handle unexpected input.

The most valuable lesson was recognizing that security isn't just about knowing attack types—it's about understanding how applications process data and where assumptions can be exploited.

## Next Steps

- Practice on TryHackMe and HackTheBox challenges
- Study secure coding patterns for the vulnerabilities I tested
- Learn more about automated security testing tools
