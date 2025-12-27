# TryHackMe Learning Path Notes

## Introduction

Comprehensive notes from my journey through TryHackMe's security learning paths.

## Key Topics Covered

### Linux Fundamentals

- File system navigation
- User and permission management
- Basic bash scripting
- Log analysis

### Network Security

- Port scanning with Nmap
- Packet analysis with Wireshark
- Network protocols (TCP/IP, HTTP, DNS)
- Network enumeration techniques

### Web Application Security

- OWASP Top 10 vulnerabilities
- Burp Suite basics
- Directory brute-forcing
- Authentication bypass techniques

### Exploitation

- Metasploit framework
- Reverse shells
- Privilege escalation
- Post-exploitation techniques

## Important Commands

### Nmap Scans
```bash
nmap -sC -sV -oN scan.txt <target>
nmap -p- -A <target>
```

### Gobuster for directory enumeration
```bash
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt
```

### Reverse Shell
```bash
nc -lvnp 4444
```

## Resources

- [TryHackMe](https://tryhackme.com)
- [HackTheBox](https://hackthebox.com)
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
