export const UISchemaMoodle = {
    type: "UI Card",
    version: "1.0",
    body: [
      {
        type: "Container",
        $data: "${courses}",
        items: [
          {
            type: "Spacing",
            direction: "row",
            size: 10,
            items: [
              {
                type: "Container",
                style: {
                  borderRadius: "5px",
                  border: "1px solid #E5E5E5",
                  overflow: "hidden",
                },
                items: [
                  {
                    type: "Image",
                    src: "${img}",
                    alt: "${title}",
                    width: "65",
                    height: "65",
                  },
                ],
              },
              {
                type: "Spacing",
                size: 0,
                justifyContent: "center",
                items: [
                  {
                    type: "TextBlock",
                    name: "paragraph",
                    weight: "normal",
                    color: "typeTitle",
                    text: "${title}",
                  },
                  {
                    type: "TextBlock",
                    name: "secondary",
                    color: "typeSecondary",
                    text: "${completionDate}",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
