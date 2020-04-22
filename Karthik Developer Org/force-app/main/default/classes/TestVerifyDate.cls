@isTest
private class TestVerifyDate {
    @isTest static void test1() {
        date d1 = date.newInstance(2016,01,12);
        date d2 = date.newinstance(2016,02,09);
        date pri = VerifyDate.CheckDates(d1,d2);
        System.assertEquals(d2, pri);
    }
    
    @isTest static void test2() {
        date d1 = date.newInstance(2016,01,12);
        date d2 = date.newinstance(2016,03,09);
        date d3 = date.newinstance(2016,01,31);
        date pri = VerifyDate.CheckDates(d1,d2);
        System.assertEquals(d3, pri);
    }
    /*
@isTest static void testTaskPriorityInvalid() {
String pri = TaskUtil.getTaskPriority('Montana');
System.assertEquals(null, pri);
}*/
}