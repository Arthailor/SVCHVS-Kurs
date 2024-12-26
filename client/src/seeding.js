import { registration } from "./http/employeeAPI"
import { createAttendance, createClass, createEvent, createParticipant, createStudent } from "./http/modelAPI"

export const seeding = async () => {
    try {
        //Employees
        await registration("Владимир", "Иванов", "Учитель", "test1@gmail.com", "1234")      //1
        await registration("Анна", "Петрова", "Учитель", "test2@gmail.com", "1234")         //2
        await registration("Мария", "Смирнова", "Учитель", "test3@gmail.com", "1234")       //3
        await registration("Дмитрий", "Кузнецов", "Учитель", "test4@gmail.com", "1234")     //4
        await registration("Ольга", "Васильева", "Учитель", "test5@gmail.com", "1234")      //5
        await registration("Алексей", "Сидоров", "Учитель", "test6@gmail.com", "1234")      //6
        await registration("Елена", "Фролова", "Учитель", "test7@gmail.com", "1234")        //7
        await registration("Николай", "Орлов", "Учитель", "test8@gmail.com", "1234")        //8
        await registration("Татьяна", "Романова", "Учитель", "test9@gmail.com", "1234")     //9
        await registration("Андрей", "Никитин", "Учитель", "test10@gmail.com", "1234")      //10
        await registration("Светлана", "Михайлова", "Учитель", "test11@gmail.com", "1234")  //11
        await registration("Павел", "Захаров", "Учитель", "test12@gmail.com", "1234")       //12
        await registration("Ирина", "Лебедева", "Учитель", "test13@gmail.com", "1234")      //13

        //Classes
        await createClass("7-A", 1)    //1
        await createClass("8-А", 11)   //2
        await createClass("8-Б", 5)    //3
        await createClass("11-A", 9)   //4
        await createClass("11-Б", 7)   //5

        //Students
        await createStudent("Максим", "Егоров", 1)              //1
        await createStudent("Анастасия", "Федорова", 1)         //2
        await createStudent("Илья", "Костин", 1)                //3
        await createStudent("Дарья", "Григорьева", 1)           //4
        await createStudent("Роман", "Сухов", 1)                //5

        await createStudent("Екатерина", "Алексеева", 2)        //6
        await createStudent("Владислав", "Мартынов", 2)         //7
        await createStudent("Юлия", "Тихонова", 2)              //8

        await createStudent("Артем", "Лисицын", 3)              //9
        await createStudent("Полина", "Соловьева", 3)           //10
        await createStudent("Никита", "Панкратов", 3)           //11

        await createStudent("Никита", "Котелев", 4)             //12
        await createStudent("Павел", "Далецкий", 4)             //13
        await createStudent("Александр", "Гисак", 4)            //14
        await createStudent("Роман", "Королёв", 4)              //15

        await createStudent("Денис", "Осмоловский", 5)          //16
        await createStudent("Кирилл", "Козлов", 5)              //17
        await createStudent("Константин", "Альхимович", 5)      //18
        await createStudent("Матвей", "Шаблинский", 5)          //19
        await createStudent("Тимофей", "Марков", 5)             //20

        //Attendance
        await createAttendance(1, true, "2024-12-26")       //1
        await createAttendance(2, false, "2024-12-26")      //2
        await createAttendance(3, false, "2024-12-26")      //3
        await createAttendance(4, true, "2024-12-26")       //4
        await createAttendance(5, true, "2024-12-26")       //5
        await createAttendance(6, false, "2024-12-26")      //6
        await createAttendance(7, false, "2024-12-26")      //7
        await createAttendance(8, false, "2024-12-26")      //8
        await createAttendance(9, true, "2024-12-26")       //9
        await createAttendance(10, false, "2024-12-26")     //10
        await createAttendance(11, true, "2024-12-26")      //11
        await createAttendance(12, false, "2024-12-26")     //12
        await createAttendance(13, true, "2024-12-26")      //13
        await createAttendance(14, true, "2024-12-26")      //14
        await createAttendance(15, false, "2024-12-26")     //15
        await createAttendance(16, false, "2024-12-26")     //16
        await createAttendance(17, true, "2024-12-26")      //17
        await createAttendance(18, false, "2024-12-26")     //18
        await createAttendance(19, true, "2024-12-26")      //19
        await createAttendance(20, false, "2024-12-26")     //20

        await createAttendance(1, false, "2024-12-27")      //21
        await createAttendance(2, true, "2024-12-27")       //22
        await createAttendance(3, true, "2024-12-27")       //23
        await createAttendance(4, false, "2024-12-27")      //24
        await createAttendance(5, true, "2024-12-27")       //25
        await createAttendance(6, false, "2024-12-27")      //26
        await createAttendance(7, false, "2024-12-27")      //27
        await createAttendance(8, true, "2024-12-27")       //28
        await createAttendance(9, true, "2024-12-27")       //29
        await createAttendance(10, true, "2024-12-27")      //30
        await createAttendance(11, false, "2024-12-27")     //31
        await createAttendance(12, true, "2024-12-27")      //32
        await createAttendance(13, false, "2024-12-27")     //33
        await createAttendance(14, true, "2024-12-27")      //34
        await createAttendance(15, true, "2024-12-27")      //35
        await createAttendance(16, true, "2024-12-27")      //36
        await createAttendance(17, false, "2024-12-27")     //37
        await createAttendance(18, false, "2024-12-27")     //38
        await createAttendance(19, false, "2024-12-27")     //39
        await createAttendance(20, true, "2024-12-27")      //40

        // Events

        //1
        const formData1 = new FormData()
        formData1.append('name', "Математика")
        formData1.append('date', "2024-12-1")
        formData1.append('type', "Олимпиада")
        formData1.append('file', null)
        await createEvent(formData1)
        //2
        const formData2 = new FormData()
        formData2.append('name', "11-Б")
        formData2.append('date', "2024-12-2")
        formData2.append('type', "Родительское собрание")
        formData2.append('file', null)
        await createEvent(formData2)
        //3
        const formData3 = new FormData()
        formData3.append('name', "7-А")
        formData3.append('date', "2024-12-3")
        formData3.append('type', "Классный час")
        formData3.append('file', null)
        await createEvent(formData3)
        //4
        const formData4 = new FormData()
        formData4.append('name', "Несвижский замок")
        formData4.append('date', "2024-12-4")
        formData4.append('type', "Экскурсия")
        formData4.append('file', null)
        await createEvent(formData4)
        //5
        const formData5 = new FormData()
        formData5.append('name', "Лучший танцор")
        formData5.append('date', "2024-12-5")
        formData5.append('type', "Конкурс")
        formData5.append('file', null)
        await createEvent(formData5)
        //6
        const formData6 = new FormData()
        formData6.append('name', "Вред курения")
        formData6.append('date', "2024-12-6")
        formData6.append('type', "Поучающее видео")
        formData6.append('file', null)
        await createEvent(formData6)

        //Participants
        //Event 1 Олимпиада по математике
        await createParticipant(2, null, 1, 1)
        await createParticipant(11, null, 1, 2)
        await createParticipant(6, null, 1, 3)

        //Event 2 Родительское собрание 11-Б
        await createParticipant(null, 5, 2, null)

        //Event 3 Классный час 7-А
        await createParticipant(null, 1, 3, null)

        //Event 4 Экскурсия Несвижский замок
        await createParticipant(null, 2, 4, null)
        await createParticipant(null, 3, 4, null)

        //Event 5 Конкурс 'Лучший танцор'
        await createParticipant(4, null, 5, 1)
        await createParticipant(10, null, 5, 2)
        await createParticipant(13, null, 5, 3)

        //Event 6 Поучающее видео Вред курения
        await createParticipant(null, 5, 6, null)
        await createParticipant(null, 3, 6, null)
    } catch {
        alert("error")
    }
}