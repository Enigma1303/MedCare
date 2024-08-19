import ml as kushal

print(" altered_sensorium , weakness_of_one_body_side , headache -> headache ")
print()
print(" abdominal_pain , dark_urine , yellowish_skin , high_fever , weight_loss , fatigue , vomiting , itching -> jaundice")
print()
n = int(input(" Enter number of symptoms: "))
sym = []
for i in range (n):
    t = input()
    sym.append(t)
print(kushal.predict_disease_by_kushal(sym))
