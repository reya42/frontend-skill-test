import { calendar, chat_bubble, credit_card, home, patients } from "../assets"

export const navButtons = [
    {
        text: "Overview",
        image: home,
        isActive: false
    },
    {
        text: "Patients",
        image: patients,
        isActive: true
    },
    {
        text: "Schedule",
        image: calendar,
        isActive: false
    },
    {
        text: "Message",
        image: chat_bubble,
        isActive: false
    },
    {
        text: "Transactions",
        image: credit_card,
        isActive: false
    },
]

import { doctor } from "../assets"

export const doctorInfo = {
    image: doctor,
    name: "Dr. Jose Simmons",
    dep: "General Practitioner"
}