export interface Event {
 id: number
 category: string
 title: string
 description: string
 location: string
 date: string
 time: string
 petsAllowed: boolean
 organizer: Organizer
}
export interface Organizer {
  id: number
  name: string
}

export interface Student {
  id: number;
  name: string;
  surname: string;
  gpa: number;
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}