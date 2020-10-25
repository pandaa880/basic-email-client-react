import randomId from "random-id";

export const mailData = {
  Inbox: {
    id: randomId(),
    name: "Inbox",
    allowFrom: ["Inbox", "Homicide", "Case Files", "Starred", "Forensics"],
    emails: [
      {
        id: randomId(),
        title: "Lunch with detective",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        isRead: false,
      },
      {
        id: randomId(),
        title: "New case files",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        isRead: false,
      },
      {
        id: randomId(),
        title: "Forensics report from Ella",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        isRead: false,
      },
      {
        id: randomId(),
        title: "Pierce murder history files",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        isRead: true,
      },
    ],
  },
  Starred: {
    id: randomId(),
    name: "Starred",

    allowFrom: ["Inbox", "Homicide", "Case Files", "Starred", "Forensics"],
    emails: [],
  },
  Sent: {
    id: randomId(),
    name: "Sent",
    allowFrom: ["Drafts", "Sent"],
    emails: [],
  },
  Drafts: {
    id: randomId(),
    name: "Drafts",
    allowFrom: ["Sent", "Drafts"],
    emails: [
      {
        id: randomId(),
        title: "Procurement of new devices",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      },
      {
        id: randomId(),
        title: "Party in office",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      },
    ],
  },
  Forensics: {
    id: randomId(),
    name: "Forensics",
    allowFrom: ["Inbox", "Homicide", "Case Files", "Starred", "Forensics"],
    emails: [
      {
        id: randomId(),
        title: "Blood report from Ohio crime scene",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        isRead: false,
      },
    ],
  },
  Homicide: {
    id: randomId(),
    name: "Homicide",
    allowFrom: ["Inbox", "Homicide", "Case Files", "Starred", "Forensics"],
    emails: [],
  },
  "Case Files": {
    id: randomId(),
    name: "Case Files",
    allowFrom: ["Inbox", "Homicide", "Case Files", "Starred", "Forensics"],
    emails: [],
  },
};
