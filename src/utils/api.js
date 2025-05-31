export async function fetchTasks() {
  const query = `
  query {
  tasks {
    id
    name
    trader {
      name
      imageLink
    }
    wikiLink
    experience
    taskImageLink
    minPlayerLevel

    taskRequirements {
      task {
        id
        name
      }
      status
    }

    traderRequirements {
      trader {
        id
        name
        
      }
    }

    kappaRequired
    lightkeeperRequired
    successMessageId
    failMessageId

    objectives {
      id
      type
      description

      ... on TaskObjectiveBuildItem {
        optional
        item {
          name
          id
          image8xLink
        }
        containsAll {
          name
        }
        containsCategory {
          name
        }
        attributes {
          name
          
        }
      }
    }
  }
}
`;

  const res = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data.tasks;
}
