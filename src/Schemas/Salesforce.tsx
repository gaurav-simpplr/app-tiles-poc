export const UISchemaSalesforce = {
    type: "UI Card",
    version: "1.0",
    body: [
      {
        type: "Table",
        rows: [
          {
            $data: "${messages}",
            type: "TableRow",
            cells: [
              {
                type: "TableCell",
                items: [
                  {
                    type: "TextBlock",
                    text: "${receivedDate}",
                  },
                ],
              },
              {
                type: "TableCell",
                items: [
                  {
                    type: "TextBlock",
                    text: "${message}",
                  },
                ],
              },
              {
                type: "TableCell",
                items: [
                  {
                    type: "TextBlock",
                    text: "${dueDate}",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };