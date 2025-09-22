import cv2
import glob
import os



img_name = glob.glob("img/research/*.png")

for resolution in [512, 1024, 2048]:
    for img_n in img_name:
        img = cv2.imread(img_n, cv2.IMREAD_UNCHANGED)
        s = img.shape
        print(img.shape, type(img))
        width = resolution
        height = int(s[0] / (s[1] / width)) #int(resolution * 9 / 16) #
        img_output = cv2.resize(img, (width, height), interpolation=cv2.INTER_CUBIC)
        print(img_output.shape, type(img))
        path = 'img/research{}'.format(width)
        if not os.path.exists(path):
            os.makedirs(path)
        #print(os.path.split(img_n)[1])
        cv2.imwrite(os.path.join(path, os.path.split(img_n)[1]), img_output)

    

#img = cv2.imread('img/profile.png', cv2.IMREAD_UNCHANGED)
#print(img.shape)

#scale_percent = 10
#width = int(img.shape[1] * scale_percent / 100)
#height = int(img.shape[0] * scale_percent / 100)

#img = cv2.resize(img, (width, height), interpolation=cv2.INTER_CUBIC)
#cv2.imwrite('img/profile{}.png'.format(scale_percent), img)
