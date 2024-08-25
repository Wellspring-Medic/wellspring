# TABLE OF CONTENT
- 🤖 Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 🕸️ License



# 🤖 INTRODUCTION
A healthcare Suite, made for 

- Healthcare Organizations, Pharmaceuticals, Health cenres etc.
- Healthcare Practitioners (Doctors, Pharmacists, Nurses etc)
- Users of Healthcare Services.




    ## Follow us on all our Social Networks for Features Updates, Community:

    - Community
    - Suggest New Features
    - Join our Development Team



    [![welldpring X logo](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/wellspringmedic)        [![Email](https://img.shields.io/badge/Wellspring%20Healthcare-28a745?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wellspring.medic@gmail.com)

    ### Follow Our Creator on his socials...
    [![Ozioma Agaecheta](https://img.shields.io/badge/Ozioma%20Agaecheta-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/)  [![Magdielian-code](https://img.shields.io/badge/Magdielian--code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/magdielian-code)    [![Life-align: God;](https://img.shields.io/badge/Life--align%3A%20God%3B-28a745?style=for-the-badge&logo=x&logoColor=white)](https://x.com/magdiel_amor)


# ⚙️ TECH STACK
- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio



# 🔋FEATURES
👉 Patient Registration: Users can sign up and create a personal profile as a patient.

👉 Appointments and Bookings: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Send SMS on Appointment Confirmation: Patients receive SMS notifications to confirm their appointment details.

👉 Complete Responsiveness: The application works seamlessly on all device types and screen sizes.

👉 File Upload Using Appwrite Storage: Users can upload and store files securely within the app using Appwrite storage services.

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.

and many more, including code architecture and reusability.

I see the issue. The problem is that you've nested code blocks within a larger code block, which is causing the formatting to break. Let's fix this by properly structuring the markdown. Here's the corrected version:



# 🤸 QUICK START

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash - using SSH
git clone git@github.com:Wellspring-Medic/wellspring.git
cd wellspring
```

```bash - using HTTPS
git clone https://github.com/Wellspring-Medic/wellspring.git
cd wellspring
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the Appwrite website.

### Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.


# LICENSE 

This project is licensed under the [MIT License](LICENSE).

[![License: MIT](https://img.shields.io/badge/License--MIT-yellow.svg)](https://opensource.org/licenses/MIT)