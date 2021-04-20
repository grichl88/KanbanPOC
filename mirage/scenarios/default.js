export default function(server) {
  server.create('workType', { workTitle: 'Defect' });
  server.create('workType', { workTitle: 'Task' });
  server.create('workType', { workTitle: 'Story' });
  server.createList('assignment', 20);
}
