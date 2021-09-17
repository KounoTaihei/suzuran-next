export const getDay = (date: Date) => {
    const newDate = new Date(date);
    const dayNum = newDate.getDay();

    switch (dayNum) {
        case 0: {
            return '日';
            break;
        }
        case 1: {
            return '月';
            break;
        }
        case 2: {
            return '火';
            break;
        }
        case 3: {
            return '水';
            break;
        }
        case 4: {
            return '木';
            break;
        }
        case 5: {
            return '金';
            break;
        }
        case 6: {
            return '土';
            break;
        }
        default: {
            return null
        }
    }
}