// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class AddTwoNumbers{
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2){
        ListNode c1 = l1;
        ListNode c2 = l2;
        int carry = 0;
        ListNode answer = new ListNode(0);
        ListNode ca = answer;
        while(c1!=null && c2!=null){
            ca.next = new ListNode(0);
            ca = ca.next;
            int sum = c1.val + c2.val + carry;
            ca.val = sum%10;
            carry = sum/10;
            c1 = c1.next;
            c2 = c2.next;
        }
        if(c1==null && c2==null){
        }else if(c1==null){
            do{
                int sum = c2.val + carry;
                int val = sum%10;
                carry = sum/10;
                ca.next = new ListNode(val);
                ca = ca.next;
                c2 = c2.next;
            }while(c2!=null);
        }else{
            do{
                int sum = c1.val + carry;
                int val = sum%10;
                carry = sum/10;
                ca.next = new ListNode(val);
                ca = ca.next;
                c1 = c1.next;
            }while(c1!=null);
        }
        if(carry == 1){
            ca.next = new ListNode(1);
        }
        return answer.next;
    }

    public static class ListNode{
        int val;
        ListNode next;
        ListNode(int x){
            val = x;
        }
        public void print(){
            ListNode current = this;
            while(current != null){
                System.out.print(current.val);
                current = current.next;
            }
            System.out.println();
        }
    }

    public static void main(String[] args){
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        ListNode sum = addTwoNumbers(l1, l2);
        sum.print();
        ListNode l3 = new ListNode(5);
        ListNode sum2 = addTwoNumbers(l3, l3);
        sum2.print();
        ListNode l4 = new ListNode(1);
        ListNode l5 = new ListNode(9);
        l5.next = new ListNode(9);
        ListNode sum3 = addTwoNumbers(l4, l5);
        sum3.print();
    }
}