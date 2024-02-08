export const UISchemaWorkday = {
    type: "UI Card",
    version: "1.0",
    body: [
      {
        type: "Spacing",
        size: 20,
        hasDividers: true,
        $data: "${messages}",
        items: [
          {
            type: "Spacing",
            direction: "column",
            size: 10,
            items: [
              {
                type: "Spacing",
                size: 0,
                justifyContent: "center",
                items: [
                  {
                    type: "TextBlock",
                    name: "secondary",
                    color: "typeSecondary",
                    text: "Received on ${receivedDate}",
                  },
                  {
                    type: "TextBlock",
                    name: "paragraph",
                    weight: "normal",
                    color: "typeTitle",
                    text: "${message}",
                  },
                  {
                    type: "TextBlock",
                    name: "secondary",
                    color: "typeSecondary",
                    text: "Due on ${dueDate}",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };