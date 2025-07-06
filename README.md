# 🧠 What This Project Is About

This is a full-stack cloud application hosted on AWS that enables users to submit a contact form via a static website. 
When users fill out the form, their submission is securely sent to a backend API hosted on EC2 and stored as JSON files in Amazon S3. 
The entire setup runs inside a custom VPC with secure architecture and performance optimization using CloudFront.

---

## 🎯 Main Objectives

1. Host a static website (HTML/CSS/JS) on S3 with a Contact Page.  
2. Create a secure API backend using Node.js on an EC2 instance to process form submissions.  
3. Store the submitted data in Amazon S3 as individual `.json` files.  
4. Secure and scale the backend using:
   - An Application Load Balancer (ALB)
   - A custom VPC with public/private subnets and NAT
   - Proper IAM roles and S3 permissions
   - CloudFront as a secure CDN layer
5. Prevent CORS/mixed-content issues and maintain security compliance.

---

## 🧰 Tech Stack & AWS Services Used

| Layer         | Technology/Service                            | Purpose                                          |
|---------------|-----------------------------------------------|--------------------------------------------------|
| Frontend      | HTML, CSS, JavaScript (Vanilla)               | User interface + Fetch API                      |
| Static Hosting| Amazon S3                                     | Host frontend website                           |
| Backend       | Node.js + Express (on EC2)                    | API to receive and store form data              |
| Load Balancing| Application Load Balancer (ALB)               | Route traffic                                   |
| Networking    | VPC, Subnets, NAT Gateway, Route Tables       | Secure networking layers                        |
| Storage       | Amazon S3                                     | Store form submissions as JSON                  |
| Permissions   | IAM Roles & Policies                          | Secure access between Users, EC2, and S3        |
| Distribution  | Amazon CloudFront                             | CDN for frontend delivery                       |

---

## 📦 Use Case / Real-World Scenario

This project simulates a real-world use case where:

- A company website has a contact form.  
- All data submissions need to be stored securely.  
- Static frontend is fast and globally available via CDN.  
- Backend is private and secure but scalable.  
- Data is stored without a traditional database, using cost-effective object storage (S3).

---

## 📝 Summary

This project demonstrates how to build a fully integrated, cloud-native application on AWS using core services like S3, EC2, VPC, CloudFront, and IAM.  
It’s a complete solution that combines frontend, backend, networking, and security — all hosted reliably and scalably in the AWS ecosystem.
