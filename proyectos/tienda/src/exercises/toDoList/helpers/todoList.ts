/*

- createTask
- toggleDone
- rename
- removeDone
- editTask
- pendingByPriority

*/

import type { Priority, Task } from "../../../types/task";

/**
 * Funcion que crea una nueva tarea
 * @param list : Task[] Array de tareas
 * @param title : string Titulo de la tarea
 * @param priority : Priority Prioridad de la tarea
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {

  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1
  return [...list, { id, title, priority, done: false }]

}

/**
 *  Descripción de la función
 * @param list Descripción
 * @param id Descripción
 * @returns Descripción
 */
export const toggleDone = (list: Task[], id: number): Task[] => {

  return list.map(t => {
    return t.id === id ? { ...t, done: !t.done } : t
  })

}

/**
 *  Descripción de la función
 * @param list Descripción
 * @param id Descripción
 * @param title Descripción
 * @returns Descripción
 */
export function rename(list: Task[], id: number, title: string): Task[] {

  //Limpiamos el title que seguramente vendra de un formulario
  const clean = title.trim()
  if (clean === '') return list;

  return list.map(t => t.id === id ? { ...t, title: clean } : t)
}

/**
 *  Descripción de la función
 * @param list Descripción
 * @param id Descripción
 * @returns Descripción
 */
export const removeDone = (list: Task[], id: number): Task[] => {
  return list.filter(t => t.id === id)[0].done ? list.filter(t => t.id !== id) : list
  // return list.filter(t => !(t.id === id && t.done))
}


/**
 *  Descripción de la función
 * @param list Descripción
 * @param id Descripción
 * @param changes Descripción
 * @returns Descripción
 */
export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {

  return list.map(t => (t.id === id ? { ...t, ...changes } : t))

}


//const order : Record <tipo, valor_igual_para_todos> = { }
const order: Record<Priority, number> = { high: 2, medium: 1, low: 0 }


export const pendingByPriority = (list: Task[]): string[] => {

  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title)

}
